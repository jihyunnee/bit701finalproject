package jwt.setting;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TestController {
  @GetMapping("/auth/login")
  public String login(@RequestParam String userId) {
    if(userId.equals("admin")) {
      Authentication authentication = new UserAuthentication(userId, null, null);
      String token = JwtTokenProvider.generateToken(authentication,userId);
      System.out.println("token="+token);
      return token;
    }
    return "error";
  }

  @GetMapping("/main")  
  public String main() {
    return "main";
  }
}