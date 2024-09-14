const web3 = require("@solana/web3.js");
const bs58 = require('bs58');
const bip39 = require('bip39');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processInput(input) {
    if (input.startsWith('[') && input.endsWith(']')) {
        // Convert Uint8Array to bs58 private key
        const uintArray = new Uint8Array(JSON.parse(input));
        console.log("bs58 encoded private key:");
        console.log(bs58.encode(uintArray));
    } else if (input.split(' ').length > 1) {
        // Process mnemonic
        const seed = bip39.mnemonicToSeedSync(input, "");
        const keypair = web3.Keypair.fromSeed(seed.slice(0, 32));
        console.log("Keypair from mnemonic:");
        console.log("Public key:", keypair.publicKey.toBase58());
        console.log("Private key (bs58):", bs58.encode(keypair.secretKey));
    } else {
        // Assume it's a bs58 private key
        try {
            const secretKey = bs58.decode(input);
            const keypair = web3.Keypair.fromSecretKey(secretKey);
            console.log("Uint8Array representation:");
            console.log(`[${keypair.secretKey}]`);
            console.log("Public key:", keypair.publicKey.toBase58());
        } catch (error) {
            console.error("Error processing input:", error.message);
        }
    }
    rl.close();
}

rl.question("Enter bs58 private key, Uint8Array, or mnemonic: ", processInput);
