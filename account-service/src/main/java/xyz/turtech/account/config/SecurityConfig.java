package xyz.turtech.account.config;

import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.keycloak.OAuth2Constants;
import org.keycloak.adapters.KeycloakConfigResolver;
import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.keycloak.adapters.springboot.KeycloakSpringBootProperties;
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents;
import org.keycloak.adapters.springsecurity.authentication.KeycloakAuthenticationProvider;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = KeycloakSecurityComponents.class)
public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {

    // Submits the KeycloakAuthenticationProvider to the AuthenticationManager
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        KeycloakAuthenticationProvider keycloakAuthenticationProvider = keycloakAuthenticationProvider();
        keycloakAuthenticationProvider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
        auth.authenticationProvider(keycloakAuthenticationProvider);
    }

    @Bean
    public KeycloakConfigResolver KeycloakConfigResolver() {
        return new KeycloakSpringBootConfigResolver();
    }

    // Specifies the session authentication strategy
    @Bean
    @Override
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    public static final String[] PUBLIC_POST_MATCHERS = {
            "/users",
            "/users/reset-password"
    };

    public static final String[] USER_GET_MATCHERS = {
            "/users/{userId}/payment-options",
            "/users/{userId}/payment-options/{userPaymentOptionId}",
            "/users/{userId}/billing-addresses/{userBillingAddressId}",
            "/users/{userId}/shipping-addresses",
            "/users/{userId}/shipping-addresses/{shippingAddressId}",

    };

    public static final String[] USER_POST_MATCHERS = {
            "/users/{userId}/payment-options",
            "/users/{userId}/shipping-addresses",

    };

    public static final String[] USER_PUT_MATCHERS = {
            "/users/{userId}",
            "/users/{userId}/payment-options/{paymentOptionId}",
            "/users/{userId}/payment-options/{paymentOptionId}/set-default",
            "/users/{userId}/shipping-addresses/{shippingAddressId}",
            "/users/{userId}/shipping-addresses/{shippingAddressId}/set-default"
    };

    public static final String[] USER_DELETE_MATCHERS = {
            "/users/{userId}/payment-options/{paymentOptionId}",
            "/users/{userId}/shipping-addresses/{shippingAddressId}"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);
        http
            // csrf should be disabled for POST requests;
            // if we use Spring Security, we must take an extra step to make
            // sure it plays well with CORS, because CORS must be processed first.
            // For Spring Security not to reject the request before it reaches Spring MVC
            // we need to add cors();
            .cors().and()
            .csrf().disable()
            .authorizeRequests()
                .antMatchers(PUBLIC_POST_MATCHERS).permitAll()
                .antMatchers(HttpMethod.GET, USER_GET_MATCHERS).hasRole("user")
                .antMatchers(HttpMethod.POST, USER_POST_MATCHERS).hasRole("user")
                .antMatchers(HttpMethod.PUT, USER_PUT_MATCHERS).hasRole("user")
                .antMatchers(HttpMethod.DELETE, USER_DELETE_MATCHERS).hasRole("user")
                .anyRequest().authenticated();
    }

    @Bean
    protected CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList(HttpMethod.GET.toString(), HttpMethod.POST.toString(), HttpMethod.PUT.toString(), HttpMethod.DELETE.toString()));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }



    @Bean
    public Keycloak keycloak(KeycloakSpringBootProperties props) {
        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(props.getAuthServerUrl())
                .realm(props.getRealm())
                .grantType(OAuth2Constants.CLIENT_CREDENTIALS)
                .clientId(props.getResource())
                //.clientSecret((String) props.getCredentials().get("secret"))
                .clientSecret("1e15bb3d-c1c7-4ced-8721-56ad236ffa89")
                .resteasyClient(new ResteasyClientBuilder()
                    .connectionPoolSize(10).build())
                .build();

        keycloak.tokenManager().getAccessToken();
        //RealmResource realmResource = keycloak.realm("turtech");

        return keycloak;
    }
}
