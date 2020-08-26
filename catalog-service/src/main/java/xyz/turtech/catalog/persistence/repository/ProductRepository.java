package xyz.turtech.catalog.persistence.repository;

import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.domain.QProduct;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>,
        QuerydslPredicateExecutor<Product>,
        QuerydslBinderCustomizer<QProduct> {

    @Override
    default void customize(QuerydslBindings bindings, QProduct product) {

        bindings.bind(String.class).first((StringPath path, String value) -> path.containsIgnoreCase(value));
    }
}
