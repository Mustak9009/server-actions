'use server'
import { revalidatePath } from "next/cache";
export const handleUser = async (formData: FormData) => {
  const email = formData.get("floating_email");
  const password = formData.get("floating_password");
  const first_name = formData.get("floating_first_name");
  const last_name = formData.get("floating_last_name");
  const phone = formData.get("floating_phone");
  const company = formData.get("floating_company");
  console.log(email, password, first_name, last_name, phone, company);
  revalidatePath("/");
};
