"use client";

import { useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { BtnLoader, FormInput } from "field-form";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

import { PhoneInput } from "@/components/form/inputs/phone-input";
import { TokenInput } from "@/components/form/inputs/token-input";
import { useCheckOtpMutation } from "@/gql/mutation/user/auth-check-otp.generated";
import { useResetPasswordMutation } from "@/gql/mutation/user/auth-reset-password.generated";
import { useSendOtpMutation } from "@/gql/mutation/user/auth-send-otp.generated";
import { FormProvider, useForm } from "@/lib/context/form-context";
import { catchHelper } from "@/lib/helper/catch-helper";
import { mutationOptionHelper } from "@/lib/helper/mutation-option-helper";

export function AuthForgotPasswordPageClient() {
  const [step, setStep] = useState<Step>("check");
  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const router = useRouter();

  return (
    <FormProvider
      initialValues={{ login }}
      onFinish={() => document.getElementById(step)?.click()}
    >
      <div className="mb-4">
        <FormInput
          label="Утасны дугаар"
          name="login"
          className={step === "check" ? "" : "hidden"}
          rules={[
            { required: step === "check", message: "Утасны дугаар оруулна уу" },
          ]}
          input={{ type: "custom", component: PhoneInput }}
        />
        <FormInput
          label="Утсанд ирсэн код"
          name="token"
          className={step === "otp" ? "" : "hidden"}
          rules={[
            {
              required: step === "otp",
              message: "Утсанд ирсэн код оруулна уу",
            },
          ]}
          input={{ type: "custom", component: TokenInput }}
        />
        <FormInput
          label="Нууц үг"
          name="password"
          className={step === "reset" ? "" : "hidden"}
          rules={[
            { required: step === "reset", message: "Нууц үг оруулна уу" },
          ]}
          input={{ type: "password", placeholder: "******" }}
        />
      </div>
      {step === "check" && <BtnCheck onSuccess={() => setStep("otp")} />}
      {step === "otp" && (
        <BtnOtp
          onSuccess={() => setStep("reset")}
          onBack={() => setStep("check")}
        />
      )}
      {step === "reset" && (
        <BtnPassword
          onSuccess={() => router.replace("/auth/login")}
          onBack={() => setStep("check")}
        />
      )}
      <button className="hidden" />
      <ul className="steps mx-auto mt-8 w-full">
        <li
          data-content={step === "check" ? "?" : "✓"}
          className="step step-primary"
        >
          Код илгээх
        </li>
        <li
          data-content={step === "otp" ? "?" : step === "reset" ? "✓" : "●"}
          className={`step ${step !== "check" ? "step-primary" : ""}`}
        >
          Шалгах
        </li>
        <li
          data-content={step === "reset" ? "?" : "●"}
          className={`step ${step === "reset" ? "step-primary" : ""}`}
        >
          Нууц үг
        </li>
      </ul>
    </FormProvider>
  );
}

function BtnCheck({ onSuccess }: { onSuccess(): void }) {
  const { form } = useForm();
  const [sendOtp, { loading }] = useSendOtpMutation({
    ...mutationOptionHelper,
    onCompleted: () => true,
  });

  return (
    <div className="flex gap-2">
      <Link href="/auth/login" className="btn">
        <ChevronLeftIcon />
        Буцах
      </Link>
      <button
        disabled={loading}
        type="button"
        id="check"
        className="btn btn-primary flex-1 text-base-100"
        onClick={async () => {
          try {
            const values = await form.validateFields(["login"]);
            const response = await sendOtp({
              variables: { input: { login: values.login } },
            });
            if (response.data?.sendOtp?.id) {
              onSuccess();
              toast.success("Таны утасны дугаар руу код илгээгдлээ");
            } else toast.error("Хэрэглэгч олдсонгүй");
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        <span>Үргэлжлүүлэх</span>
        <BtnLoader loading={loading} icon={ChevronRightIcon} />
      </button>
    </div>
  );
}

function BtnOtp({ onSuccess, onBack }: { onSuccess(): void; onBack(): void }) {
  const { form } = useForm();
  const [checkOtp, { loading }] = useCheckOtpMutation({
    ...mutationOptionHelper,
    onCompleted: () => true,
  });

  return (
    <div className="flex gap-2">
      <button type="button" onClick={onBack} className="btn">
        <ChevronLeftIcon />
        Буцах
      </button>
      <button
        id="otp"
        disabled={loading}
        type="button"
        className="btn btn-primary btn-block flex-1 text-base-100"
        onClick={async () => {
          try {
            const values = await form.validateFields(["login", "token"]);
            const response = await checkOtp({
              variables: {
                input: {
                  login: values.login,
                  token: values.token,
                  unconfirmedMobile: false,
                },
              },
            });
            if (response.data?.checkOtp) onSuccess();
            else toast.error("Токен буруу байна");
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        <span>Үргэлжлүүлэх</span>
        <BtnLoader loading={loading} icon={ChevronRightIcon} />
      </button>
    </div>
  );
}

function BtnPassword({
  onSuccess,
  onBack,
}: {
  onSuccess(): void;
  onBack(): void;
}) {
  const { form } = useForm();
  const [resetPassword, { loading }] = useResetPasswordMutation({
    ...mutationOptionHelper,
    onCompleted: () => true,
  });

  return (
    <div className="flex gap-2">
      <button type="button" onClick={onBack} className="btn">
        <ChevronLeftIcon />
        Буцах
      </button>
      <button
        disabled={loading}
        type="button"
        id="reset"
        className="btn btn-primary btn-block flex-1 text-base-100"
        onClick={async () => {
          try {
            const values = await form.validateFields([
              "login",
              "token",
              "password",
            ]);
            const response = await resetPassword({
              variables: {
                input: {
                  login: values.login,
                  token: values.token,
                  password: values.password,
                },
              },
            });
            if (response.data?.resetPassword) {
              toast.success("Нууц үг амжилттай солигдлоо");
              onSuccess();
            } else toast.error("Токен буруу байна");
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        <span>Хадгалах</span>
        <BtnLoader loading={loading} icon={ChevronRightIcon} />
      </button>
    </div>
  );
}

type Step = "check" | "otp" | "reset";
