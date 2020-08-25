package xyz.turtech.catalog.persistence.repository;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>,
        QuerydslPredicateExecutor<Product> {

    Page<Product> findAllBy(Predicate predicate, PageRequest pageRequest);
}
