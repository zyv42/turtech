package xyz.turtech.catalog.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
}
