package xyz.turtech.account.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.account.persistence.domain.UserShipping;

@Repository
public interface UserShippingRepository extends MongoRepository<UserShipping, String> {

    Iterable<UserShipping> findByUserId(String userId);
}
