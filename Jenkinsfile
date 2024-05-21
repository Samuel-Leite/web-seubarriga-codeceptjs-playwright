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
                    npx codeceptjs run ./tests/e2e/*_test.js --verbose
                    ls -la output
                '''
            }
        }
    }

    post {
        always {
            // Verifica se o arquivo junit.xml existe antes de tentar processá-lo
            script {
                def testResults = findFiles(glob: 'output/junit.xml')
                if (testResults.length == 0) {
                    error "No test report files were found. Configuration error?"
                }
            }
            junit 'output/junit.xml'
        }
    }
}