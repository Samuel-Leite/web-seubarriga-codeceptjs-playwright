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

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    mkdir -p output
                    npx codeceptjs run --verbose
                    sh 'ls -la output'
                '''
            }
        }
    }

    post {
        always {
            script {
                def result = sh(script: 'if [ -f output/junit.xml ]; then echo "File exists"; else echo "File does not exist"; fi', returnStdout: true).trim()
                if (result == "File does not exist") {
                    error "No test report files were found. Configuration error?"
                }
            }
            junit 'output/junit.xml'
        }
    }
}
