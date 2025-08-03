package com.kastro.training.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class TrainingInfoServlet extends HttpServlet {
    
    private ObjectMapper objectMapper = new ObjectMapper();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        
        Map<String, Object> trainingInfo = new HashMap<>();
        trainingInfo.put("title", "Jenkins Docker Kubernetes and Terraform Training - Batch 06");
        trainingInfo.put("instructor", "Kastro Kiran V");
        trainingInfo.put("batch", "Batch 06");
        trainingInfo.put("duration", "8 Weeks");
        trainingInfo.put("format", "Hands-on Labs & Real Projects");
        trainingInfo.put("certification", "Industry Recognized Certificate");
        
        String jsonResponse = objectMapper.writeValueAsString(trainingInfo);
        response.getWriter().write(jsonResponse);
    }
}