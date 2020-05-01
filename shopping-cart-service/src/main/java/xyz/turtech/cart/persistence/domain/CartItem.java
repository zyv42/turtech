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
    @JsonIgnore
    private int productInStock;
    @JsonIgnore
    private BigDecimal singleItemPrice;
    private BigDecimal subtotal;
    private String productId;
    private String shoppingCartId;

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

    public int getProductInStock() {
        return productInStock;
    }

    public void setProductInStock(int productInStock) {
        this.productInStock = productInStock;
    }

    public BigDecimal getSingleItemPrice() {
        return singleItemPrice;
    }

    public void setSingleItemPrice(BigDecimal singleItemPrice) {
        this.singleItemPrice = singleItemPrice;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getShoppingCartId() {
        return shoppingCartId;
    }

    public void setShoppingCartId(String shoppingCartId) {
        this.shoppingCartId = shoppingCartId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartItem cartItem = (CartItem) o;
        return id.equals(cartItem.id) &&
                productId.equals(cartItem.productId) &&
                shoppingCartId.equals(cartItem.shoppingCartId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productId, shoppingCartId);
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id='" + id + '\'' +
                ", qty=" + qty +
                ", productInStock=" + productInStock + '\'' +
                ", singleItemPrice=" + singleItemPrice + '\'' +
                ", subtotal=" + subtotal + '\'' +
                ", productId='" + productId + '\'' +
                ", shoppingCartId='" + shoppingCartId + '\'' +
                '}';
    }
}
