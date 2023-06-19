# ExpressJS API with AWS Serverless Functions

This is a TypeScript ExpressJS application that serves as an API-only application using AWS Serverless Functions. It provides endpoints to handle various API requests. The application is designed to be deployed on AWS Lambda using the serverless framework.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 18 LTS or higher)
- Yarn (preferred package manager)
- AWS CLI (configured with appropriate credentials)
- [Serverless](https://www.serverless.com) framework (optional for deployment)

## Getting Started

To run and deploy this application locally, follow the instructions below.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_path>
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

### Configuration

Make sure you have configured your AWS CLI with valid credentials. You can set up your AWS credentials using the `aws configure` command.

### Local Development

To start the application locally for development, run the following command:

```bash
yarn web:start:dev
```

The API will be accessible at `http://localhost:3000`.

## Deployment

This application can be deployed to various platforms or services that support Node 18 runtime.

The current setup allows serverless infrastructure setup using AWS Lambda functions. The cloudformation template is generated using the serverless framework.

1. Install serverless

   ```bash
   yarn global add serverless
   ```

2. Configure AWS CLI: [aws.amazon.com/cli](https://aws.amazon.com/cli/)

3. Install serverless plugins

   ```bash
   yarn install
   ```

4. Build application

   ```bash
   yarn build
   ```

5. Trigger Deployment

   ```bash
   serverless deploy
   ```

## API Endpoints

The following API endpoints are available:

- `GET /api/v1/welcome`: Retrieves hello world message.

For detailed information about request/response formats and example usage, please refer to the API documentation.

## Development and Testing

To run the unit tests, execute the following command:

```bash
yarn test
```

This will run the test suite and provide feedback on test coverage and test results.

## Contributing

Contributions are welcome! If you find any issues or want to suggest improvements, please create a GitHub issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
