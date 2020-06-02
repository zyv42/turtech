package xyz.turtech.order.persistence.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document
public class Payment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

}
