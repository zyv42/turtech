package xyz.turtech.order.persistence.service.Impl;

import org.springframework.stereotype.Service;
import xyz.turtech.order.persistence.domain.PaymentOption;
import xyz.turtech.order.persistence.repository.PaymentOptionRepository;
import xyz.turtech.order.persistence.service.PaymentOptionService;

@Service
public class PaymentOptionServiceImpl implements PaymentOptionService {

    private final PaymentOptionRepository paymentOptionRepository;

    public PaymentOptionServiceImpl(PaymentOptionRepository paymentOptionRepository) {
        this.paymentOptionRepository = paymentOptionRepository;
    }

    @Override
    public PaymentOption findById(Long paymentOptionId) {
        return paymentOptionRepository.findById(paymentOptionId)
                .orElseThrow(() -> new RuntimeException("Payment Option not found - " + paymentOptionId));
    }
}
