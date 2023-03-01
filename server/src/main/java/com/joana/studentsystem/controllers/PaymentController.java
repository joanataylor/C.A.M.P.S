package com.joana.studentsystem.controllers;

import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.*;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @PostMapping("/create-payment-intent")
    public ResponseEntity<Map<String, Object>> createPaymentIntent(@RequestBody Map<String, Object> request) {
        Stripe.apiKey = stripeSecretKey;

        int amount = 1400; // You can calculate the order amount based on the request data
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setCurrency("usd")
                .setAmount((long) amount)
                .build();

        try {
            PaymentIntent paymentIntent = PaymentIntent.create(params);
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("clientSecret", paymentIntent.getClientSecret());
            return ResponseEntity.ok(responseBody);
        } catch (StripeException e) {
            // Handle exceptions here
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
