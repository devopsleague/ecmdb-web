export interface createOrderReq {
  template_id: number
  workflow_id: number
  data: object
}

export interface todoOrderReq {
  user_id?: string
  process_name?: string
  sort_by_asc: boolean
  offset: number
  limit: number
}

export interface startByOrderReq {
  user_id?: string
  process_name?: string
  offset: number
  limit: number
}

export interface order {
  task_id: number
  process_instance_id: number
  title: string
  current_step: string
  approved_by: string[]
  proc_inst_create_time: string
  workflow_id: number
  template_id: number
  ctime: number
  data: object
}

export interface ordersListRes {
  orders: order[]
  total: number
}

export interface passOrder {
  task_id: number
  comment: string
}

export interface rejectOrder {
  task_id: number
  comment: string
}

export interface taskRecordReq {
  process_inst_id: number
  offset: number
  limit: number
}

export interface taskRecord {
  nodename: string // 当前步骤
  approved_by: string // 处理人
  is_cosigned: number // 是否会签
  status: number // 任务状态:0:初始 1:通过 2:驳回
  comment: string // 评论
  is_finished: number // 0:任务未完成 1:处理完成
  finished_time: string
}

export interface taskRecords {
  task_records: taskRecord[]
  total: number
}
