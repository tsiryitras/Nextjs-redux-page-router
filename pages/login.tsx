import ButtonSubmit from "@/components/ButtonSubmit";
import InputField from "@/components/InputField";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-title">
          <h4>Login Page</h4>
        </div>
        <form action="" className="form">
          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="email@exemple.com"
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Votre mot de passe"
          />
          <ButtonSubmit label="Se connecter" />
        </form>
      </div>
    </div>
  );
}

LoginPage.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
