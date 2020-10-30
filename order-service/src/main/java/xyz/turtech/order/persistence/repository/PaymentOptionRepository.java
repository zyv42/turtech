package xyz.turtech.order.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.order.persistence.domain.PaymentOption;

@Repository
public interface PaymentOptionRepository extends CrudRepository<PaymentOption, Long> {
}
