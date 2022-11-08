const { createVerifiableCredential } = require("did-jwt-vc")

async function main() {
    console.log("createVerifiableCredential: ", createVerifiableCredential)
}

main().catch(console.log)