#!/bin/bash

# 변경 사항이 있는지 확인
if [ -z "$(git status --porcelain)" ]; then
  echo "변경사항이 없습니다."
  exit 0
fi

# 1. 모든 변경 사항 스테이징
git add .

# 2. 커밋 메시지 입력 받기
echo -n "변경 내용(커밋 메시지)을 입력하세요 [Enter 누르면 'Update site' 사용]: "
read msg

if [ -z "$msg" ]; then
  msg="Update site"
fi

# 3. 커밋 및 푸시
git commit -m "$msg"
git push

echo "---------------------------------------"
echo "GitHub 업데이트가 완료되었습니다!"
