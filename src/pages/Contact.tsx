import { useRef, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, message } from 'antd'
import SectionLayout from '../layouts/SectionLayout'
import type { SidebarGroup } from '../components/Sidebar'
import { COMPANY } from '../data/company'

const CONTACT_NAV: SidebarGroup[] = [
  {
    title: '문의하기',
    icon: 'phone',
    items: [
      { label: '온라인 문의', to: '/contact' },
      { label: '오시는 길', to: '/about/location' },
    ],
  },
]

type InquiryValues = {
  name: string
  phone: string
  email?: string
  type: string
  message: string
  agree: boolean
}

function Contact() {
  const [form] = Form.useForm<InquiryValues>()
  const [submitting, setSubmitting] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (values: InquiryValues) => {
    setSubmitting(true)
    console.info('[문의 접수]', values, fileName)
    window.setTimeout(() => {
      setSubmitting(false)
      message.success('문의가 접수되었습니다. 빠르게 연락드리겠습니다.')
      form.resetFields()
      setFileName('')
    }, 400)
  }

  const handleReset = () => {
    form.resetFields()
    setFileName('')
  }

  return (
    <SectionLayout
      eyebrow="CONTACT"
      title="문의하기"
      lead="제품 및 견적 문의는 아래 정보로 연락 주시기 바랍니다"
      sidebarGroups={CONTACT_NAV}
    >
      <div className="contact-strip">
        <span>
          대표자 <strong>{COMPANY.ceo}</strong>
        </span>
        <span>
          주소 <strong>{COMPANY.addressShort}</strong>
        </span>
        <span>
          TEL{' '}
          <strong>
            <a href={COMPANY.telHref}>{COMPANY.tel}</a>
          </strong>
        </span>
        <span>
          FAX <strong>{COMPANY.fax}</strong>
        </span>
      </div>

      <h2 className="content-title">온라인 문의</h2>

      <Form
        className="inquiry-form"
        form={form}
        layout="horizontal"
        labelCol={{ flex: '120px' }}
        wrapperCol={{ flex: 'auto' }}
        labelAlign="left"
        colon={false}
        requiredMark={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="이름"
          name="name"
          rules={[{ required: true, message: '이름을 입력해 주세요' }]}
        >
          <Input placeholder="홍길동" />
        </Form.Item>
        <Form.Item
          label="핸드폰번호"
          name="phone"
          rules={[{ required: true, message: '연락처를 입력해 주세요' }]}
        >
          <Input placeholder="010-0000-0000" />
        </Form.Item>
        <Form.Item label="이메일" name="email">
          <Input placeholder="example@email.com" />
        </Form.Item>
        <Form.Item
          label="문의유형"
          name="type"
          rules={[{ required: true, message: '문의유형을 선택해 주세요' }]}
        >
          <Select
            placeholder="선택해 주세요"
            options={[
              { value: '견적문의', label: '견적문의' },
              { value: '제품문의', label: '제품문의' },
              { value: '기술상담', label: '기술상담' },
              { value: '기타', label: '기타' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="신청내용"
          name="message"
          rules={[{ required: true, message: '문의내용을 입력해 주세요' }]}
        >
          <Input.TextArea rows={6} placeholder="문의하실 내용을 입력해 주세요" />
        </Form.Item>
        <Form.Item label="첨부파일">
          <div className="file-field">
            <input
              className="file-field-name"
              type="text"
              readOnly
              value={fileName}
              placeholder="선택된 파일이 없습니다"
            />
            <Button onClick={() => fileInputRef.current?.click()}>찾아보기</Button>
            <input
              ref={fileInputRef}
              type="file"
              hidden
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            />
          </div>
        </Form.Item>

        <div className="privacy-box">
          <p>
            1. 개인정보의 수집 및 이용 목적: 문의 접수 및 답변, 견적 상담을 위한 연락 목적으로만
            사용하며, 이용자의 동의 없이 목적 외의 용도로 이용하지 않습니다.
          </p>
          <p>
            2. 수집하는 개인정보 항목: 이름, 연락처, 이메일, 문의내용 및 첨부파일(선택)
          </p>
          <p>
            3. 개인정보의 보유 및 이용 기간: 문의 처리 완료 후 즉시 파기하며, 관계 법령에 따라
            보존이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
        </div>
        <Form.Item
          name="agree"
          valuePropName="checked"
          labelCol={{ flex: '0px' }}
          wrapperCol={{ flex: 'auto' }}
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('개인정보 처리방침에 동의해 주세요')),
            },
          ]}
        >
          <Checkbox>개인정보 취급방침에 동의합니다.</Checkbox>
        </Form.Item>

        <div className="form-actions">
          <Button type="primary" htmlType="submit" loading={submitting}>
            확인
          </Button>
          <Button htmlType="button" onClick={handleReset}>
            취소
          </Button>
        </div>
      </Form>
    </SectionLayout>
  )
}

export default Contact
