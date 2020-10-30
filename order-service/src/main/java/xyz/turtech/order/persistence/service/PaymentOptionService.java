package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.PaymentOption;

import java.util.Optional;

public interface PaymentOptionService {

    Optional<PaymentOption> findById(Long paymentOptionId);
}
