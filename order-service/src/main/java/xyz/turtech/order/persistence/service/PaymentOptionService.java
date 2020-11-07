package xyz.turtech.order.persistence.service;

import xyz.turtech.order.persistence.domain.PaymentOption;

public interface PaymentOptionService {

    PaymentOption findById(Long paymentOptionId);
}
