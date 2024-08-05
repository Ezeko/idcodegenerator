This package offers robust features for generating unique IDs and One-Time Passwords (OTPs) with customizable lengths, enhancing security and flexibility for various applications.

### Unique ID Generation
The package enables the creation of unique identifiers that can be customized to your specifications. You can define the format, length, and character set, making it ideal for user identification, transaction tracking, and more.

### OTP Generation
It also facilitates the generation of OTPs with varying lengths and formats, such as numeric or alphanumeric. This flexibility allows for secure authentication and verification processes tailored to your needs.

### Example Usage
```javascript
const idcodegenerator = require('idcodegenerator');

// Generate a unique ID of 10 characters, alphanumeric
const id = idcodegenerator.generate(10, true); // Example output: 'bu537hfrGk'

// Generate a 6-digit numeric OTP
const otpcode = idcodegenerator.generate(6); // Example output: '507674'

// Generate a 6-character alphabetic OTP
const otpcodeAlpha = idcodegenerator.generate(6, false, true); // Example output: 'lkKCJx'
```

Both the unique ID (alphanumeric and alphabetic) and OTP generation features are designed with security in mind, ensuring that the generated codes are not only unique but also secure. This package can be seamlessly integrated into your system, providing a streamlined and efficient solution for identity and verification needs.