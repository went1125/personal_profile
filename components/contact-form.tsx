"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({ name: z.string().min(2, "請輸入姓名"), email: z.string().email("請輸入有效的 Email"), company: z.string().optional(), type: z.string().min(1, "請選擇專案類型"), message: z.string().min(12, "請多告訴我一些專案內容"), consent: z.literal(true, { error: "請同意隱私政策" }) });
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });
  if (submitted) return <div className="form-success" role="status"><p className="eyebrow">訊息已準備好</p><h2>謝謝你的來信。</h2><p>這是前端展示模式；正式環境將透過安全表單服務傳送通知。</p></div>;
  return <form className="contact-form" onSubmit={handleSubmit(async () => { await new Promise((resolve) => setTimeout(resolve, 400)); setSubmitted(true); })} noValidate>
    <label>姓名<input {...register("name")} autoComplete="name" />{errors.name && <span className="field-error">{errors.name.message}</span>}</label>
    <label>Email<input type="email" {...register("email")} autoComplete="email" />{errors.email && <span className="field-error">{errors.email.message}</span>}</label>
    <label>公司或團隊 <span className="optional">選填</span><input {...register("company")} autoComplete="organization" /></label>
    <label>專案類型<select defaultValue="" {...register("type")}><option value="" disabled>請選擇</option><option>品牌與網站</option><option>數位產品</option><option>設計系統</option><option>其他合作</option></select>{errors.type && <span className="field-error">{errors.type.message}</span>}</label>
    <label>想做些什麼？<textarea rows={5} {...register("message")} />{errors.message && <span className="field-error">{errors.message.message}</span>}</label>
    <label className="checkbox"><input type="checkbox" {...register("consent")} />我同意將我的資訊用於回覆本次詢問。{errors.consent && <span className="field-error">{errors.consent.message}</span>}</label>
    <button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "傳送中…" : "送出訊息 ↗"}</button>
  </form>;
}
