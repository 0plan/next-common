import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div id="error-page">
      <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0">
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h2>이런!</h2>
            <p>페이지를 찾을 수 없어요!</p>
            <Link href="/">
              <Button className="mt-4">홈페이지로 돌아가기</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
