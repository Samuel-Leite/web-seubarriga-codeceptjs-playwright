pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker{
                    image 'node:20.9.0-alpine3.18'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npx playwright install
                    ls -la
                '''
            }
        }
        stage('Test') {
                        agent {
                docker{
                    image 'node:20.9.0-alpine3.18'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm run tag '@wip'
                '''
            }
        }
    }
}
