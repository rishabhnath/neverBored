const whiteSpacePatternc = new RegExp(/\s/g);
const allSpecialCharacterPattern = new RegExp(/[^a-zA-Z0-9]/);
const onlynumberPattern = new RegExp(/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/);
const urlPattern = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);

export function validateCreateToken(values) {
    const errors = {};

    // Validate Token Symbol
    if (typeof values.tokenSymbol !== "string" || values.tokenSymbol.trim() === "") {
        errors.tokenSymbol = "Token Symbol must not be empty";
    } else if (whiteSpacePatternc.test(values.tokenSymbol)) {
        errors.tokenSymbol = "Token Symbol must not have blank space";
    } else if (values.tokenSymbol.length > 20) {
        errors.tokenSymbol = "Token Symbol length cnannot be more than 20";
    } else if (allSpecialCharacterPattern.test(values.tokenSymbol)) {
        errors.tokenSymbol = "Token Symbol must not have special character";
    }

    // Validate Token Name
    if (typeof values.tokenName !== "string" || values.tokenName.trim() === "") {
        errors.tokenName = "Token Name must not be empty";
    } else if (whiteSpacePatternc.test(values.tokenName)) {
        errors.tokenName = "Token Name must not have blank space";
    } else if (values.tokenName.length > 30) {
        errors.tokenName = "Token Name lenth cannot be more than 30";
    } else if (allSpecialCharacterPattern.test(values.tokenName)) {
        errors.tokenName = "Token Name must not have special character";
    }


    // to check token decimal
    if (!values.tokenDecimal && values.tokenDecimal !== 0) {
        errors.tokenDecimal = "Token Decimal must not be empty";
    } else if (values.tokenDecimal < 0 || !onlynumberPattern.test(values.tokenDecimal)) {
        errors.tokenDecimal = "Token Decimal is invalid";
    }

    // to check token description
    if (typeof values.tokenDescription === "string" && values.tokenDescription.trim() !== "" && values.tokenDescription.length > 300) {
        errors.tokenDescription = "Token Description length cannot be more than 300";
    }

    // to check types of assets
    if (typeof values.typeOfAsset !== "string" || values.typeOfAsset.trim() === "") {
        errors.typeOfAsset = "Token Asset Type must not be empty";
    }

    // to check security identifier
    if (typeof values.securityIdentifier !== "string" || values.securityIdentifier.trim() === "") {
        errors.securityIdentifier = "Token Security Identifier must not be empty";
    }

    // to check Funding round
    if (typeof values.fundingRound !== "string" || values.fundingRound.trim() === "") {
        errors.fundingRound = "Token Funding Round must not be empty";
    }

    // to check token divisibility
    if (typeof values.tokenDivisibility !== "string" || values.tokenDivisibility.trim() === "") {
        errors.tokenDivisibility = "Token Divisibility must not be empty";
    }

    // to check token supply
    if (!values.tokenSupply && values.tokenSupply !== 0) {
        errors.tokenSupply = "Token Supply must not be empty";
    } else if (values.tokenSupply < 0 || !onlynumberPattern.test(values.tokenSupply)) {
        errors.tokenSupply = "Token Supply is invalid";
    }

    // to check additional links
    if (typeof values.additionalTokenLinks === "string" && values.additionalTokenLinks.trim() !== "") {
        if (values.additionalTokenLinks.length > 1000) {
            errors.additionalTokenLinks = "Token Link length cannot be more than 1000";
        } else if (!urlPattern.test(values.additionalTokenLinks)) {
            errors.additionalTokenLinks = "Token Link is invalid";
        }
    }

    return errors;
}

export function validateMintToken(values) {
    const errors = {};

    // to check token minted
    if (!values.mintedToken && values.mintedToken !== 0) {
        errors.mintedToken = "Token number must not be empty";
    } else if (values.mintedToken < 0 || !onlynumberPattern.test(values.mintedToken)) {
        errors.mintedToken = "Token number is invalid";
    }

    return errors;
}

export function validateDistriuteToken(values) {
    const errors = {};

    // Validate Distribute Event
    if (typeof values.distributeEvent !== "string" || values.distributeEvent.trim() === "") {
        errors.distributeEvent = "Distribute event not be empty";
    } else if (allSpecialCharacterPattern.test(values.distributeEvent)) {
        errors.distributeEvent = "Distribute event must not have special character";
    }

    // Validate Wallet Address
    if (typeof values.address !== "string" || values.address.trim() === "") {
        errors.address = "Wallet address must not be empty";
    } else if (whiteSpacePatternc.test(values.address)) {
        errors.address = "Wallet address must not have blank space";
    } else if (allSpecialCharacterPattern.test(values.address)) {
        errors.address = "Wallet address must not have special character";
    }

    // to check token amount
    if (!values.amount && values.amount !== 0) {
        errors.amount = "Token amount must not be empty";
    } else if (values.amount < 0 || !onlynumberPattern.test(values.amount)) {
        errors.amount = "Token amount is invalid";
    }

    return errors;
}
