# DevOps Training Portal - Batch 06

A beautiful Java web application for Jenkins, Docker, Kubernetes, and Terraform training by Kastro Kiran V.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful animations, gradients, and micro-interactions
- **Course Content**: Comprehensive coverage of DevOps tools
- **RESTful APIs**: Dynamic content loading via servlets
- **Production Ready**: Optimized for Tomcat deployment

## Technology Stack

- **Backend**: Java 11, Servlets, JSP
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Maven
- **Server**: Apache Tomcat 9+
- **Database**: JSON-based data (easily extensible to RDBMS)

## Course Coverage

### 🚀 Jenkins - CI/CD Automation
- Pipeline as Code (Jenkinsfile)
- Blue Ocean Plugin
- Multi-branch Pipelines
- Webhook Integration
- Build Triggers & Scheduling
- Plugin Management
- Distributed Builds (Master-Slave)
- Security & RBAC
- Pipeline Debugging
- Integration with Git/SCM

### 🐳 Docker - Containerization
- Container Lifecycle Management
- Dockerfile Best Practices
- Multi-stage Builds
- Docker Compose
- Volume Management
- Network Configuration
- Registry Operations (DockerHub, ECR)
- Container Security
- Resource Optimization
- Monitoring & Logging

### ☸️ Kubernetes - Container Orchestration
- Pod, Service, Deployment
- ConfigMaps & Secrets
- Persistent Volumes
- Ingress Controllers
- RBAC & Security Policies
- Helm Charts
- Cluster Autoscaling
- Service Mesh (Istio)
- Monitoring with Prometheus
- GitOps with ArgoCD

### 🏗️ Terraform - Infrastructure as Code
- HCL Configuration Language
- State Management
- Modules & Workspaces
- Provider Configuration
- Remote State (S3, DynamoDB)
- Plan, Apply, Destroy Workflow
- Resource Dependencies
- Variable Management
- Output Values
- Cloud Provider Integration (AWS, Azure, GCP)

## Prerequisites

- Java 11 or higher
- Apache Maven 3.6+
- Apache Tomcat 9+
- Modern web browser

## Building the Application

```bash
# Clone the repository
git clone <repository-url>
cd devops-training-portal

# Clean and compile
mvn clean compile

# Package the WAR file
mvn package

# The WAR file will be generated at: target/devops-training-portal.war
```

## Deployment to Tomcat

### Option 1: Manual Deployment
1. Copy the WAR file to Tomcat's webapps directory:
   ```bash
   cp target/devops-training-portal.war $TOMCAT_HOME/webapps/
   ```

2. Start Tomcat:
   ```bash
   $TOMCAT_HOME/bin/startup.sh  # Linux/Mac
   $TOMCAT_HOME/bin/startup.bat # Windows
   ```

3. Access the application at: `http://localhost:8080/devops-training-portal`

### Option 2: Tomcat Manager
1. Access Tomcat Manager: `http://localhost:8080/manager`
2. Upload the WAR file using the deployment section
3. Start the application

### Option 3: AWS EC2 Deployment
1. Upload WAR to your EC2 instance:
   ```bash
   scp -i your-key.pem target/devops-training-portal.war ec2-user@your-ec2-ip:/opt/tomcat/webapps/
   ```

2. Restart Tomcat on EC2:
   ```bash
   sudo systemctl restart tomcat
   ```

3. Access via: `http://your-ec2-ip:8080/devops-training-portal`

## API Endpoints

- `GET /api/training-info` - Get training information
- `GET /api/course-content` - Get course content and concepts

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/kastro/training/servlet/
│   │       ├── TrainingInfoServlet.java
│   │       └── CourseContentServlet.java
│   └── webapp/
│       ├── WEB-INF/
│       │   └── web.xml
│       ├── css/
│       │   └── styles.css
│       ├── js/
│       │   └── script.js
│       ├── error/
│       │   ├── 404.html
│       │   └── 500.html
│       └── index.jsp
├── pom.xml
└── README.md
```

## Development

### Running in Development Mode
```bash
# Use Maven Tomcat plugin for development
mvn tomcat7:run

# Or use your IDE's Tomcat integration
```

### Making Changes
1. Modify source code
2. Rebuild: `mvn clean package`
3. Redeploy WAR file
4. Test changes

## Security Considerations

- Input validation implemented in servlets
- XSS protection via proper encoding
- CSRF protection can be added as needed
- HTTPS should be configured in production

## Performance Optimizations

- Minified CSS and JavaScript
- Optimized images and icons
- Lazy loading for course content
- Efficient servlet processing
- CDN integration for external resources

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Troubleshooting

### Common Issues

1. **WAR not deploying**
   - Check Tomcat logs: `$TOMCAT_HOME/logs/catalina.out`
   - Verify Java version compatibility
   - Ensure sufficient memory allocation

2. **404 Errors**
   - Verify context path in URL
   - Check web.xml servlet mappings
   - Ensure WAR extracted properly

3. **API endpoints not working**
   - Check servlet initialization
   - Verify JSON dependencies
   - Review server logs for errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Instructor

**Kastro Kiran V**
- Senior DevOps Engineer & Certified Trainer
- 8+ years of experience in DevOps and Cloud Engineering
- AWS Certified, Kubernetes Expert, Docker Captain, Jenkins Specialist

## Contact

- Email: kastro.kiran@training.com
- Phone: +1 (555) 123-4567
- LinkedIn: [kastro-kiran-v](https://linkedin.com/in/kastro-kiran-v)

---

**DevOps Training Academy** - Empowering the next generation of DevOps professionals