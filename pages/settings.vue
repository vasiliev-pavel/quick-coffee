<template>
  <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
    <h2 class="text-4xl font-bold">
      Settings
    </h2>
    <form @submit="onSubmit">

      <FormField v-slot="{ componentField }" name="username">
        <FormItem class="mt-6">
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" class="text-black" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            This is your public display name on cups.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ value, handleChange }" name="marketing_emails">
        <FormItem class="flex flex-row items-center justify-between mt-4">
          <div class="space-y-0.5">
            <FormLabel class="text-base">
              Marketing emails
            </FormLabel>
            <FormDescription>
              Receive emails about new products, features, and more.
            </FormDescription>
          </div>
          <FormControl>
            <Switch :checked="value" @update:checked="handleChange" />
          </FormControl>
        </FormItem>
      </FormField>

      <FormField v-slot="{ value, handleChange }" name="recepit_email">
        <FormItem class="flex flex-row items-center justify-between mt-4">
          <div class="space-y-0.5">
            <FormLabel class="text-base">
              Receipt on Email
            </FormLabel>
            <FormDescription>
              Receive receipt on email, save the trees.
            </FormDescription>
          </div>
          <FormControl>
            <Switch :checked="value" @update:checked="handleChange" />
          </FormControl>
        </FormItem>
      </FormField>




      <Button class="mt-4" variant="secondary" type="submit">
        Submit
      </Button>
      <Button class="mt-4 ml-4" variant="destructive" type="submit">
        Delete Account
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/components/ui/toast/use-toast'
import { Input } from '@/components/ui/input'
const { toast } = useToast()

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  toast({
    title: 'Form submitted',
    description: values,
  });
})
</script>