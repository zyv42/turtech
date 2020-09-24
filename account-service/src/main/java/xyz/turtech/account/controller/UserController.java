package xyz.turtech.account.controller;

import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import xyz.turtech.account.persistence.domain.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.util.Arrays;

@RestController
public class UserController {

    private final Keycloak keycloak;

    public UserController(Keycloak keycloak) {
        this.keycloak = keycloak;
    }

//    @PreAuthorize("#oauth2.hasScope('server')")
//    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping(path = "/test")
    public String test() {
        return "Test";
    }

    /**
     * By default KeyCloak REST API doesn't allow to create account with credential type is PASSWORD,
     * it means after created account, need an extra step to make it works, it's RESET PASSWORD
     * @param newUser - a new user to be created
     * @return
     */
 //   @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/newUser")
    public ResponseEntity<?> newUser(@Valid @RequestBody User newUser) {
        CredentialRepresentation credential = new CredentialRepresentation();
        credential.setType(CredentialRepresentation.PASSWORD);
        credential.setValue(newUser.getPassword());

        UserRepresentation user = new UserRepresentation();
        user.setUsername(newUser.getUsername());
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());
        user.setEnabled(true);
        user.singleAttribute("phone", newUser.getPhone());
        user.setCredentials(Arrays.asList(credential));

        Response response = keycloak.realm("turtech")
                .users().create(user);
        if (response.getStatus() != HttpStatus.CREATED.value()) {
            return new ResponseEntity<>(null, HttpStatus.valueOf(response.getStatus()));
        }
        String path = response.getLocation().getPath();
        final String createdId = path.substring(path.lastIndexOf('/') + 1);

        //ResetPassword
        CredentialRepresentation newCredential = new CredentialRepresentation();
        UserResource userResource = keycloak.realm("turtech")
                .users().get(createdId);
        newCredential.setType(CredentialRepresentation.PASSWORD);
        newCredential.setValue(newUser.getPassword());
        newCredential.setTemporary(false);
        userResource.resetPassword(newCredential);

        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }
}
