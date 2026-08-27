import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const {
      companyName,
      contactNumber,
      email,
      website,
      businessType,
      otherBusiness,
    } = body;

    const business =
      businessType === "Other" || otherBusiness
        ? `${businessType} (${otherBusiness})`
        : businessType;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // testing sender
      to: ["support@pryzma.in"],
      subject: `New Signup Request from ${companyName}`,
      html: `
        <h2>New Signup Request for Pryzma</h2>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Business Type:</strong> ${business}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}