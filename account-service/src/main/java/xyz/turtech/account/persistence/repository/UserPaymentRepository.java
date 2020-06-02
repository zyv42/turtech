package xyz.turtech.account.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserPayment;

@Repository
public interface UserPaymentRepository extends MongoRepository<UserPayment, String> {

    Iterable<UserPayment> findByUserId(String userId);
}