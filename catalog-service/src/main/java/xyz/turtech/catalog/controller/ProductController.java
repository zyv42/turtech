package xyz.turtech.catalog.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.query.CriteriaQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.turtech.catalog.persistence.domain.Product;

import static org.elasticsearch.index.query.QueryBuilders.matchAllQuery;

@RestController
public class ProductController {

    private ElasticsearchOperations elasticsearchOperations;

    public ProductController(ElasticsearchOperations elasticsearchOperations) {
        this.elasticsearchOperations = elasticsearchOperations;
    }

    @GetMapping("/products")
    public Page<Product> getAllProducts() {
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                .withQuery(matchAllQuery())
                .build();

        return elasticsearchOperations.queryForPage(searchQuery, Product.class);
    }
}
