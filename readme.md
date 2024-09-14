# Solana Key Decoder

This project provides a Node.js script to convert between different formats of Solana private keys and derive keys from mnemonics.

## Purpose

This tool allows users to:
1. Convert base58-encoded Solana private keys to Uint8Array representation
2. Convert Uint8Array private keys to base58 format
3. Derive keys from BIP39 mnemonics
4. Display public keys for all input types

It's useful for developers and users working with Solana wallets who need to convert between different key formats or derive keys from mnemonics.

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/solana-key-converter.git
   cd solana-key-converter
   ```

2. Install dependencies:
   ```
   npm install @solana/web3.js bs58 bip39
   ```

## Usage

1. Run the script:
   ```
   node index.js
   ```

2. When prompted, enter one of the following:
   - A base58-encoded private key
   - A Uint8Array representation of a private key (in the format [1,2,3,...])
   - A BIP39 mnemonic phrase

3. The script will output:
   - For base58 private keys:
     - Uint8Array representation
     - Corresponding public key
   - For Uint8Array inputs:
     - base58-encoded private key
   - For mnemonic phrases:
     - Derived public key
     - Derived private key (base58)

## Security Note
This tool is for educational and development purposes. Never share your private keys or mnemonics with untrusted parties or enter them into untrusted applications.

## License
This project is open source and available under the [MIT License](LICENSE).
