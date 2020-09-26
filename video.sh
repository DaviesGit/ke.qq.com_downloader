
file="13.ts"
key='af82614e74b1e69858b064f913fdacf0'
openssl enc -aes-128-cbc -nosalt -d \
	-in "/t/temp/ke/$file" \
	-K $key -iv '00000000000000000000000000000000' > "$file"
