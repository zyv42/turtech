package xyz.turtech.catalog.persistence.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

    Page<Product> findByCategory(String category, PageRequest pageRequest);
    Page<Product> findByNameIgnoreCase(String name, PageRequest pageRequest);
}
