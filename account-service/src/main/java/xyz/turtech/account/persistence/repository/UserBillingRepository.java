package xyz.turtech.account.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserBilling;

@Repository
public interface UserBillingRepository extends MongoRepository<UserBilling, String> {
}
