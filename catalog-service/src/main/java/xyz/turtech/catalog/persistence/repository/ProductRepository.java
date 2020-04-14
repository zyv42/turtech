package xyz.turtech.catalog.persistence.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import xyz.turtech.catalog.persistence.domain.Product;

@Repository
public interface ProductRepository extends ElasticsearchRepository<Product, Long> {
}
