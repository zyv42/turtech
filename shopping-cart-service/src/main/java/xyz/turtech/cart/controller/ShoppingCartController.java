package xyz.turtech.cart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import xyz.turtech.cart.client.AccountServiceClient;
import xyz.turtech.cart.client.ProductServiceClient;
import xyz.turtech.cart.persistence.domain.CartItem;
import xyz.turtech.cart.persistence.domain.Product;
import xyz.turtech.cart.persistence.domain.ShoppingCart;
import xyz.turtech.cart.persistence.domain.User;
import xyz.turtech.cart.persistence.service.CartItemService;
import xyz.turtech.cart.persistence.service.ShoppingCartService;

import java.security.Principal;
import java.util.Optional;

@RestController
public class ShoppingCartController {

    private final CartItemService cartItemService;
    private final ShoppingCartService shoppingCartService;
    private final ProductServiceClient productServiceClient;
    private final AccountServiceClient accountServiceClient;

    public ShoppingCartController(CartItemService cartItemService,
                                  ShoppingCartService shoppingCartService,
                                  ProductServiceClient productServiceClient,
                                  AccountServiceClient accountServiceClient) {
        this.cartItemService = cartItemService;
        this.shoppingCartService = shoppingCartService;
        this.productServiceClient = productServiceClient;
        this.accountServiceClient = accountServiceClient;
    }

    @GetMapping("/shopping-carts")
    public ResponseEntity<?> shoppingCart(Principal principal) {
        String sessionId = RequestContextHolder.currentRequestAttributes().getSessionId();
        Optional<User> user = accountServiceClient.getAccount(principal.getName());
        if (user.isPresent()) {
            ShoppingCart shoppingCart = shoppingCartService.createShoppingCart(user.get(), sessionId);
        }
        ShoppingCart shoppingCart = shoppingCartService.createShoppingCart(null, sessionId);
        return new ResponseEntity<>(shoppingCart, HttpStatus.OK);
    }

    @PostMapping("/shopping-carts/{cartId}/cart-items")
    public void addItem(@RequestParam("productId") String productId,
                        @RequestParam("qty") int qty,
                        Principal principal) {
        Optional<User> user = accountServiceClient.getAccount(principal.getName());
        Optional<Product> product = productServiceClient.getProduct(productId);

        if (product.isPresent()) {
            if (qty > product.get().getInStockNumber()) {
                //TODO NotEnoughStockException
            }
            String sessionId = RequestContextHolder.currentRequestAttributes().getSessionId();
            if (user.isPresent()) {
                ShoppingCart shoppingCart = shoppingCartService.createShoppingCart(user.get(), sessionId);
                cartItemService.addProductToCartItem(product.get(), shoppingCart.getId(), qty);
            } else {
                ShoppingCart shoppingCart = shoppingCartService.createShoppingCart(null, sessionId);
                cartItemService.addProductToCartItem(product.get(), shoppingCart.getId(), qty);
            }
        } else {
            //TODO ProductNotFoundException
        }
    }

    @PutMapping("/shopping-carts/{cartId}")
    public void updateShoppingCart(@RequestParam("cartItemId") String cartItemId,
                                   @RequestParam("qty")int qty) {
        CartItem cartItem = cartItemService.findById(cartItemId);
        cartItem.setQty(qty);
        cartItemService.updateCartItem(cartItem);
    }

    @DeleteMapping("/shopping-carts/{cartId}/cart-items/{itemId}")
    public void removeItem(@RequestParam("cartItemId") String cartItemId) {
        cartItemService.deleteCartItem(cartItemService.findById(cartItemId));
    }
}
