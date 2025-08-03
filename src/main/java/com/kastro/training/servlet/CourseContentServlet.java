package com.kastro.training.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

public class CourseContentServlet extends HttpServlet {
    
    private ObjectMapper objectMapper = new ObjectMapper();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        
        Map<String, Object> courseContent = createCourseContent();
        String jsonResponse = objectMapper.writeValueAsString(courseContent);
        response.getWriter().write(jsonResponse);
    }
    
    private Map<String, Object> createCourseContent() {
        Map<String, Object> content = new HashMap<>();
        
        // Jenkins Content
        Map<String, Object> jenkins = new HashMap<>();
        jenkins.put("title", "Jenkins - CI/CD Automation");
        jenkins.put("icon", "🚀");
        jenkins.put("concepts", Arrays.asList(
            "Pipeline as Code (Jenkinsfile)",
            "Blue Ocean Plugin",
            "Multi-branch Pipelines",
            "Webhook Integration",
            "Build Triggers & Scheduling",
            "Plugin Management",
            "Distributed Builds (Master-Slave)",
            "Security & RBAC",
            "Pipeline Debugging",
            "Integration with Git/SCM"
        ));
        
        // Docker Content
        Map<String, Object> docker = new HashMap<>();
        docker.put("title", "Docker - Containerization");
        docker.put("icon", "🐳");
        docker.put("concepts", Arrays.asList(
            "Container Lifecycle Management",
            "Dockerfile Best Practices",
            "Multi-stage Builds",
            "Docker Compose",
            "Volume Management",
            "Network Configuration",
            "Registry Operations (DockerHub, ECR)",
            "Container Security",
            "Resource Optimization",
            "Monitoring & Logging"
        ));
        
        // Kubernetes Content
        Map<String, Object> kubernetes = new HashMap<>();
        kubernetes.put("title", "Kubernetes - Container Orchestration");
        kubernetes.put("icon", "☸️");
        kubernetes.put("concepts", Arrays.asList(
            "Pod, Service, Deployment",
            "ConfigMaps & Secrets",
            "Persistent Volumes",
            "Ingress Controllers",
            "RBAC & Security Policies",
            "Helm Charts",
            "Cluster Autoscaling",
            "Service Mesh (Istio)",
            "Monitoring with Prometheus",
            "GitOps with ArgoCD"
        ));
        
        // Terraform Content
        Map<String, Object> terraform = new HashMap<>();
        terraform.put("title", "Terraform - Infrastructure as Code");
        terraform.put("icon", "🏗️");
        terraform.put("concepts", Arrays.asList(
            "HCL Configuration Language",
            "State Management",
            "Modules & Workspaces",
            "Provider Configuration",
            "Remote State (S3, DynamoDB)",
            "Plan, Apply, Destroy Workflow",
            "Resource Dependencies",
            "Variable Management",
            "Output Values",
            "Cloud Provider Integration (AWS, Azure, GCP)"
        ));
        
        content.put("jenkins", jenkins);
        content.put("docker", docker);
        content.put("kubernetes", kubernetes);
        content.put("terraform", terraform);
        
        return content;
    }
}