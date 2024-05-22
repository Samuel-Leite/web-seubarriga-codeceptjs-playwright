pipeline {
    agent any

    stages {
        stage('Build') {
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

        // stage('Test') {
        //     agent {
        //         docker {
        //             image 'node:18-alpine'
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         sh '''
        //             npx codeceptjs run ./tests/e2e/*_test.js mocha --reporter mocha-junit-reporter
        //         '''
        //     }
        // }

        stage('E2E') {
            agent {
                docker {
                    image 'codeceptjs/codeceptjs'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    docker pull mcr.microsoft.com/playwright:v1.44.0-focal
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