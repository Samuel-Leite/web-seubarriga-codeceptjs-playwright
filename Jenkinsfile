pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    node --version
                    npm --version
                    npm install
                '''
            }
        }

        stage('Run Test') {
            agent {
                docker {
                    image 'codeceptjs/codeceptjs:sha-0e1b86a'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npx codeceptjs run ./tests/e2e/*_test.js mocha --reporter mocha-junit-reporter
                '''
            }
        }
    }

    post {
        always {
            junit 'output/junit.xml'
        }
    }
}