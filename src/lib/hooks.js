import { addView } from "lib/firebase";
import { useEffect } from "react";

export function usePostViewCount(postId) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      addView(postId);
    }
  }, [postId]);
}
