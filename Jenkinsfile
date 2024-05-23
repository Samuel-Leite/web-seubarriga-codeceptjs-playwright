pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            agent {
                docker {
                    image 'node:22.2-alpine3.20'
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
                    npx codeceptjs run ./tests/e2e/Login_test.js --reporter mochawesome
                '''
            }
        }
    }

    post {
        always {
            // junit 'output/junit.xml'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'output', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}