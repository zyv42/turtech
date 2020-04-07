package xyz.turtech.account.controller;

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

    @PreAuthorize("#oauth2.hasScope('server')")
    @GetMapping(path = "/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.findByUsername(username).get();
    }

    @GetMapping(path = "/current")
    public User getCurrentUser(Principal principal) {
        return userService.findByUsername(principal.getName()).get();
    }

    @PutMapping(path = "/current")
    public void updateCurrentUser(Principal principal, @Valid @RequestBody User user) {
        userService.updateUser(principal.getName(), user);
    }

    @PostMapping(path = "/")
    public User createNewUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }
}
