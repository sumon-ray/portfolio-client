// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // URL থেকে 'path' এবং 'secret' প্যারামিটারগুলো নিন
  const path = request.nextUrl.searchParams.get('path');
  const secret = request.nextUrl.searchParams.get('secret');

  // নিরাপত্তা যাচাই: পরিবেশ ভেরিয়েবলে সেট করা গোপন কী-এর সাথে মিলিয়ে দেখুন
  // এটি খুব গুরুত্বপূর্ণ যাতে যে কেউ আপনার সাইটের ক্যাশে রিফ্রেশ করতে না পারে।
  if (!secret || secret !== process.env.MY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  // 'path' প্যারামিটারটি আছে কিনা নিশ্চিত করুন
  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 });
  }

  try {
    // নির্দিষ্ট পাথ রিভ্যালিডেট করুন।
    // উদাহরণ: revalidatePath('/dashboard/skills/all-skills')
    // revalidatePath('/') হোমপেজের জন্য
    revalidatePath(path);
    
    // সফল রেসপন্স পাঠান
    return NextResponse.json({ revalidated: true, now: Date.now(), path: path });
  } catch (err) {
    // কোনো ত্রুটি হলে এরর রেসপন্স পাঠান
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}