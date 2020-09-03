package xyz.turtech.account.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import xyz.turtech.account.persistence.domain.User;
import xyz.turtech.account.persistence.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @PreAuthorize("#oauth2.hasScope('server')")
    @PreAuthorize("permitAll()")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        User user = userService.findByUsername(username).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(path = "/current")
    public ResponseEntity<?> getCurrentUser(Principal principal) {
        User user = userService.findByUsername(principal.getName()).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(path = "/current")
    public void updateCurrentUser(@Valid @RequestBody User user,
                                  Principal principal) {
        userService.updateUser(principal.getName(), user);
    }

    @PostMapping(path = "/")
    public ResponseEntity<?> createNewUser(@Valid @RequestBody User newUser) {
        User user = userService.createUser(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
