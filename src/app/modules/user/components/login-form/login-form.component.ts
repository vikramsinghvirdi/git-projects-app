import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  error: any;
  authorizationCode: any;
  isLoading: boolean;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

    const me = this;
    /**
     * This will take care of callback from GitHub OAuth
     * authentication and process the code returend in
     * url params
     */
    this.route.data.subscribe(data => {
      if (data['actionType'] === 'callback') {
        me.error = '';
        me.route.queryParams.subscribe(
          (params: Params) => {
            if (params.code)
              me.validateCode(params.code);
          }
        );
      }
    });
  }

  ngOnInit() {

  }
/**
 * GitHub API call to authorize for first time user 
 */
  authorizeUser() {
    window.open(environment.authorizeUrl, '_self')
  }

  /**
   * validates code return after authorization
   * and gets back access token to be used across all
   * GitHub API calls. Once code is validated user is logged in
   * and re-direced to home page
   * @param code: string
   */
  validateCode(code: any) {
    const me = this;
    this.isLoading = true;
    this.userService.validateAuthorizationCode(code)
      .then((res) => {
        me.router.navigate(['/home']);
        this.isLoading = false;
      }).catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  }



}
