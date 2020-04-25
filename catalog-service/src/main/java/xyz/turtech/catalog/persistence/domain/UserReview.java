package xyz.turtech.catalog.persistence.domain;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Document(collection = "userReviews")
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserReview implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    private String text;

    private LocalDateTime timestamp;

    private String authorName;

    private String userId;

    private String productId;

    public UserReview() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserReview that = (UserReview) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserReview{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                ", timestamp=" + timestamp +
                ", authorName=" + authorName + '\'' +
                ", userId='" + userId + '\'' +
                ", productId='" + productId + '\'' +
                '}';
    }
}
