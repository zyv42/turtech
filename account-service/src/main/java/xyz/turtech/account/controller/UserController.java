package xyz.turtech.account.controller;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import xyz.turtech.account.persistence.domain.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.util.*;

@RestController
public class UserController {

    private final Keycloak keycloak;

    public UserController(Keycloak keycloak) {
        this.keycloak = keycloak;
    }

//    @PreAuthorize("#oauth2.hasScope('server')")
    @GetMapping(path = "/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        System.out.println("get endpoint hit");
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    /**
     * By default KeyCloak REST API doesn't allow to create account with credential type is PASSWORD,
     * it means after created account, need an extra step to make it works, it's RESET PASSWORD
     * @param newUser - a new user to be created
     * @return
     */
    @PostMapping(path = "/newUser")
    public ResponseEntity<?> newUser(@Valid @RequestBody User newUser) {

        RealmResource realmResource = keycloak.realm("turtech");

        // Create password
        CredentialRepresentation credential = new CredentialRepresentation();
        credential.setType(CredentialRepresentation.PASSWORD);
        credential.setValue(newUser.getPassword());
        // Get realm role
        RoleRepresentation userRealmRole = realmResource.roles()
                .get("user").toRepresentation();

        // Create user
        UserRepresentation user = new UserRepresentation();
        user.setUsername(newUser.getUsername());
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());
        user.setEnabled(true);
        user.singleAttribute("phone", newUser.getPhone());

        // Assign password to the user
        user.setCredentials(Arrays.asList(credential));

        Response response = realmResource.users().create(user);

        if (response.getStatus() != HttpStatus.CREATED.value()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(response.getStatus()));
        }

        String userId = CreatedResponseUtil.getCreatedId(response);
        //Assign user role to the user
        realmResource.users().get(userId).roles().realmLevel().add(Arrays.asList(userRealmRole));

        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @PostMapping(path = "/updateProfile")
    public ResponseEntity<?> updateUser(@Valid @RequestBody User updatedUser) {

        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserResource userResource = keycloak.realm("turtech").users().get(token.getName());
        UserRepresentation userRepresentation = userResource.toRepresentation();

        userRepresentation.setFirstName(updatedUser.getFirstName());
        userRepresentation.setLastName(updatedUser.getLastName());
        userRepresentation.setEmail(updatedUser.getEmail());

        Map<String, List<String>> customAttributes = new HashMap<>();
        List<String> phones = new ArrayList<>();
        phones.add(updatedUser.getPhone());
        customAttributes.put("Phone", phones);

        userRepresentation.setAttributes(customAttributes);

        userResource.update(userRepresentation);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping(path = "/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestParam String email) {
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
