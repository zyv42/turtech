package xyz.turtech.cart.persistence.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@RedisHash("CartItem")
public class CartItem implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private int qty;
    private BigDecimal subtotal;
    private String shoppingCartId;
    @JsonIgnore
    private Product product;

    public CartItem() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public String getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(String shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartItem cartItem = (CartItem) o;
        return id.equals(cartItem.id) &&
                product.equals(cartItem.product) &&
                shoppingCartId.equals(cartItem.shoppingCartId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, product, shoppingCartId);
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id='" + id + '\'' +
                ", qty=" + qty +
                ", subtotal=" + subtotal + '\'' +
                ", shoppingCartId='" + shoppingCartId + '\'' +
                ", productId='" + product.getId() + '\'' +
                '}';
    }
}
